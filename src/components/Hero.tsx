import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full">
              <Sparkles className="h-5 w-5 text-primary-600" />
              <span className="text-primary-700 font-medium">Advanced NLP Technology</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Decode Customer
            <span className="gradient-text block">Emotions</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform customer reviews into actionable insights with our advanced sentiment analysis. 
            Understand what your customers really think and improve your business decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary group">
              Try Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">
              View Documentation
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-primary-600 mb-2">99.2%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Reviews Analyzed</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-gray-600">Sentiment Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;