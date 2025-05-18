
import { useState, useEffect } from 'react';

type Product = {
  name: string;
  price: string;
  image: string;
};

type ViewEvent = {
  productName: string;
  timestamp: number;
};

// Maximum number of events to store in history
const MAX_HISTORY_ITEMS = 20;

// Store view events in localStorage
const saveViewEvent = (productName: string): void => {
  try {
    // Get existing history or initialize empty array
    const historyString = localStorage.getItem('view_history') || '[]';
    const history: ViewEvent[] = JSON.parse(historyString);
    
    // Add new event at the beginning
    history.unshift({ 
      productName, 
      timestamp: Date.now() 
    });
    
    // Limit history size
    const trimmedHistory = history.slice(0, MAX_HISTORY_ITEMS);
    
    // Save back to localStorage
    localStorage.setItem('view_history', JSON.stringify(trimmedHistory));
  } catch (error) {
    console.error('Error saving view event:', error);
  }
};

// Get the list of previously viewed products
const getViewHistory = (): string[] => {
  try {
    const historyString = localStorage.getItem('view_history') || '[]';
    const history: ViewEvent[] = JSON.parse(historyString);
    return history.map(event => event.productName);
  } catch (error) {
    console.error('Error getting view history:', error);
    return [];
  }
};

// Simple recommendation algorithm based on product name similarity
const getRecommendations = (
  allProducts: Product[], 
  viewHistory: string[], 
  maxRecommendations: number = 4
): Product[] => {
  // If no view history, return random products
  if (viewHistory.length === 0) {
    return shuffleArray(allProducts).slice(0, maxRecommendations);
  }

  // Get the most recently viewed product name
  const lastViewedProductName = viewHistory[0];

  // Find products with similar names (simple string matching for now)
  // This is a simple implementation - in a real system, you'd use more sophisticated algorithms
  const scoredProducts = allProducts
    .filter(product => !viewHistory.includes(product.name)) // Exclude already viewed products
    .map(product => {
      // Calculate similarity score (very basic)
      // Split product names into words and count matching words
      const lastViewedWords = lastViewedProductName.toLowerCase().split(' ');
      const productWords = product.name.toLowerCase().split(' ');
      
      // Count how many words match between the two products
      const matchingWords = productWords.filter(word => 
        lastViewedWords.some(lastWord => lastWord.includes(word) || word.includes(lastWord))
      );
      
      return {
        product,
        score: matchingWords.length
      };
    })
    .sort((a, b) => b.score - a.score); // Sort by score (highest first)
  
  // Return top N recommendations
  const recommendations = scoredProducts
    .slice(0, maxRecommendations)
    .map(item => item.product);
  
  // If we don't have enough similar products, add some random ones
  if (recommendations.length < maxRecommendations) {
    const remainingCount = maxRecommendations - recommendations.length;
    const excludedNames = [...viewHistory, ...recommendations.map(p => p.name)];
    const randomProducts = allProducts
      .filter(product => !excludedNames.includes(product.name))
      .slice(0, remainingCount);
    
    return [...recommendations, ...randomProducts];
  }
  
  return recommendations;
};

// Hook to track product views and get recommendations
export const useRecommendations = (products: Product[]) => {
  const [viewedProduct, setViewedProduct] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  // Track product view
  const trackProductView = (productName: string) => {
    saveViewEvent(productName);
    setViewedProduct(productName);
  };

  // Update recommendations when viewedProduct changes
  useEffect(() => {
    if (products.length > 0) {
      const viewHistory = getViewHistory();
      const newRecommendations = getRecommendations(products, viewHistory);
      setRecommendations(newRecommendations);
    }
  }, [viewedProduct, products]);

  return { 
    trackProductView,
    recommendations 
  };
};

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
