const posts = async (req, res) => {
  const { body, method } = req;
  if (method === "POST") {
    await fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "x-token-access": "random",
      },
    });
    res.status(200).end();
  }
};

export default posts;
