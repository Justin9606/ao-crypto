export default function handler(req, res) {
  if (req.method === "POST") {
    const { address } = req.body;
    const signature = "0x" + "a".repeat(64); // Mock signature
    res.status(200).json({ signature });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
