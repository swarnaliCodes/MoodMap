import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver highly accurate sentiment analysis with advanced NLP techniques and machine learning algorithms.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving our technology to provide cutting-edge solutions for modern business challenges.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Understanding customer sentiment is at the heart of everything we do, helping businesses connect better.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results and maintaining the highest standards in sentiment analysis.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">MoodMap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming how businesses understand customer emotions through advanced sentiment analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At MoodMap, we believe that understanding customer sentiment is crucial for business success. 
              Our advanced sentiment analysis platform helps companies decode the emotions behind customer 
              reviews, feedback, and communications.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Using state-of-the-art natural language processing and machine learning techniques, we provide 
              accurate, real-time sentiment classification that enables businesses to make data-driven decisions 
              and improve customer satisfaction.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">2023</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50K+</div>
                <div className="text-sm text-gray-600">Reviews Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">99%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Python & NLTK</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">TextBlob Analysis</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Machine Learning</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Data Processing</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 bg-primary-50 rounded-full w-fit mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;