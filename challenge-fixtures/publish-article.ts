type Draft = { title: string; publishedAt: null }
type Published = { title: string; publishedAt: Date }

function publish(draft: Draft, timestamp: Date): Published {
  return { ...draft, publishedAt: timestamp }
}

const article = publish({ title: 'React Gym', publishedAt: null }, new Date())
console.log(article.publishedAt.toISOString())
