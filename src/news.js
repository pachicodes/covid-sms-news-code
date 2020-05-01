fetch("https://api.smartable.ai/coronavirus/news/US", {
  method: "GET",
  headers: {
    "Subscription-Key": "79559029a15647d6a450795ab7ba2b59",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data.news);
    const news = data.news.slice(0, 1);
    news.map((item) => {
      const title = item.title;
      const text = item.excerpt;
      const link = item.webUrl;
    });
  })

  .catch((error) => {
    console.error("Error:", error);
  });
