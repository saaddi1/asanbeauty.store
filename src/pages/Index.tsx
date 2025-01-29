import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const faqs = [
    {
      question: "How often should I apply skincare products?",
      answer: "For most skincare products, it's recommended to apply them twice daily - once in the morning and once at night. However, some products like exfoliants should only be used 2-3 times per week."
    },
    {
      question: "What order should I apply my skincare products?",
      answer: "The general rule is to apply products from thinnest to thickest consistency: cleanser, toner, serum, moisturizer, and sunscreen (during the day)."
    },
    {
      question: "How long should I wait between applying products?",
      answer: "It's best to wait about 30 seconds to 1 minute between each product to allow it to properly absorb into your skin."
    },
    {
      question: "What's the best way to store beauty products?",
      answer: "Most beauty products should be stored in a cool, dry place away from direct sunlight. Some products may need refrigeration - check the packaging for specific storage instructions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="hero-gradient">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Discover Your Natural Beauty
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Experience our collection of premium skincare and beauty products
                made with natural ingredients.
              </p>
              <Button size="lg" className="bg-[#C1D9BF] text-gray-800 hover:bg-[#A3C2A0]">
                Shop Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Your Questions & Answers
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;