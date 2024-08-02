import pandas as pd
import re
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from textblob import TextBlob
import nltk

nltk.download('stopwords')
nltk.download('wordnet')


df = pd.read_csv('https://github.com/YBIFoundation/ProjectHub/raw/main/Women%20Clothing%20E-Commerce%20Review.csv')
df.dropna(inplace=True)

# Text preprocessing function
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text) 
    text = re.sub(r'\d+', '', text)      
    text = ' '.join([word for word in text.split() if word not in stopwords.words('english')])
    lemmatizer = WordNetLemmatizer()
    text = ' '.join([lemmatizer.lemmatize(word) for word in text.split()])
    return text


df['Review'] = df['Review'].apply(preprocess_text)

# Add sentiment analysis
def get_sentiment(text):
    blob = TextBlob(text)
    sentiment = blob.sentiment.polarity
    if sentiment > 0:
        return 'positive'
    elif sentiment < 0:
        return 'negative'
    else:
        return 'neutral'

# Apply sentiment analysis
df['Sentiment'] = df['Review'].apply(get_sentiment)

# Count the number of each sentiment category
sentiment_counts = df['Sentiment'].value_counts()
print("Sentiment Counts:")
print(sentiment_counts)
