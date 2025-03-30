import Newsletter from "../models/newsletter.model.js";

export const createSubs = async (req, res) => {
  try {
    const { email } = req.body;

    const exitstingEmail = await Newsletter.find({ email });
    if (exitstingEmail.length > 0) {
      return res.status(400).json({ error: "Email already exists!" });
    }

    const newSubscriber = new Newsletter({ email });

    await newSubscriber.save();
    return res
      .status(200)
      .json({ Message: "Creation Successfull", newSubscriber });
  } catch (error) {
    return res.status(500).json({ message: "Failed Creation", error });
  }
};

export const getSubs = async (req, res) => {
  try {
    const subscribers = await Newsletter.find({ status: true });
    return res.status(200).json(subscribers);
  } catch (error) {
    return res.status(500).json("Fail to load", error);
  }
};

export const deleteSubs = async (req, res) => {
  try {
    const { subDelId } = req.params;
    const subs = await Newsletter.findById(subDelId);

    if (!subs) return res.status(404).json({ message: "Not Found" });

    subs.status = false;

    await subs.save();
    return res.status(200).json({ subs });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
