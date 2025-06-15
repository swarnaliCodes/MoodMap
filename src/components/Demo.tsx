import React, { useState } from 'react';
import { Send, Smile, Frown, Meh, Loader } from 'lucide-react';

const Demo = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<{
    sentiment: 'positive' | 'negative' | 'neutral';
    confidence: number;
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const sampleReviews = [
    "This dress is absolutely beautiful! The quality is amazing and it fits perfectly. I love it!",
    "The product arrived damaged and the customer service was terrible. Very disappointed.",
    "It's okay, nothing special but does the job. Average quality for the price."
  ];

  const analyzeSentiment = (text: string) => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Simple sentiment analysis simulation
      const positiveWords = ['love', 'amazing', 'beautiful', 'perfect', 'excellent', 'great', 'wonderful'];
      const negativeWords = ['terrible', 'awful', 'bad', 'disappointed', 'damaged', 'horrible', 'worst'];
      
      const words = text.toLowerCase().split(' ');
      let positiveCount = 0;
      let negativeCount = 0;
      
      words.forEach(word => {
        if (positiveWords.some(pw => word.includes(pw))) positiveCount++;
        if (negativeWords.some(nw => word.includes(nw))) negativeCount++;
      });
      
      let sentiment: 'positive' | 'negative' | 'neutral';
      let confidence: number;
      
      if (positiveCount > negativeCount) {
        sentiment = 'positive';
        confidence = Math.min(0.7 + (positiveCount * 0.1), 0.95);
      } else if (negativeCount > positiveCount) {
        sentiment = 'negative';
        confidence = Math.min(0.7 + (negativeCount * 0.1), 0.95);
      } else {
        sentiment = 'neutral';
        confidence = 0.6 + Math.random() * 0.2;
      }
      
      setResult({ sentiment, confidence });
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      analyzeSentiment(inputText);
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <Smile className="h-8 w-8 text-positive-500" />;
      case 'negative':
        return <Frown className="h-8 w-8 text-negative-500" />;
      default:
        return <Meh className="h-8 w-8 text-neutral-500" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-positive-50 border-positive-200 text-positive-800';
      case 'negative':
        return 'bg-negative-50 border-negative-200 text-negative-800';
      default:
        return 'bg-neutral-50 border-neutral-200 text-neutral-800';
    }
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try Our <span className="gradient-text">Live Demo</span>
          </h2>
          <p className="text-xl text-gray-600">
            Experience the power of sentiment analysis in real-time
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <label htmlFor="review-text" className="block text-sm font-medium text-gray-700 mb-2">
                Enter a customer review to analyze:
              </label>
              <textarea
                id="review-text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                rows={4}
                placeholder="Type or paste a customer review here..."
              />
            </div>
            <button
              type="submit"
              disabled={!inputText.trim() || isAnalyzing}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <Loader className="animate-spin mr-2 h-5 w-5" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Analyze Sentiment
                </>
              )}
            </button>
          </form>

          {result && (
            <div className={`p-6 rounded-xl border-2 ${getSentimentColor(result.sentiment)} animate-fade-in`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getSentimentIcon(result.sentiment)}
                  <div>
                    <h3 className="text-xl font-semibold capitalize">
                      {result.sentiment} Sentiment
                    </h3>
                    <p className="text-sm opacity-75">
                      Confidence: {(result.confidence * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white/50 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    result.sentiment === 'positive' ? 'bg-positive-500' :
                    result.sentiment === 'negative' ? 'bg-negative-500' : 'bg-neutral-500'
                  }`}
                  style={{ width: `${result.confidence * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Try these sample reviews:</h3>
          <div className="space-y-3">
            {sampleReviews.map((review, index) => (
              <button
                key={index}
                onClick={() => setInputText(review)}
                className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-sm"
              >
                "{review}"
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;