from redis import Redis
import logging

logging.basicConfig(level=logging.INFO)
redis = Redis(host='primary.xxx.yyyyyy.zzz1.cache.amazonaws.com', port=6379, decode_responses=True, ssl=True, username='example', password='example')

if redis.ping():
    logging.info("Connected to Redis")
