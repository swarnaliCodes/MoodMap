import React from 'react';
import { Brain, Zap, Shield, BarChart3, Filter, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced NLP Processing',
      description: 'Sophisticated text preprocessing with lemmatization, stop word removal, and normalization for accurate analysis.',
      color: 'text-primary-600'
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Get instant sentiment classification for customer reviews with lightning-fast processing speeds.',
      color: 'text-yellow-600'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Comprehensive sentiment distribution analysis with visual charts and statistical insights.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Reliable Results',
      description: 'Built on proven TextBlob sentiment analysis with consistent and dependable classification.',
      color: 'text-blue-600'
    },
    {
      icon: Filter,
      title: 'Smart Filtering',
      description: 'Intelligent text cleaning removes noise while preserving meaningful sentiment indicators.',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'Scalable Solution',
      description: 'Handle large datasets efficiently with optimized processing for enterprise-level applications.',
      color: 'text-red-600'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="gradient-text"> Sentiment Analysis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive toolkit provides everything you need to understand customer sentiment at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-3 rounded-xl bg-gray-50 w-fit mb-6 ${feature.color}`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;