import Message from "../models/messages.model.js";

export const createMessage = async (req, res) => {
  try {
    const { username, email, phone, message } = req.body;

    const newMessage = new Message({ username, email, phone, message });

    await newMessage.save();
    return res.status(200).json({ newMessage });
  } catch (error) {
    return res.status(500).json({ message: "Error in insert message", error });
  }
};

export const getMessage = async (req, res) => {
  try {
    const messages = await Message.find({ status: true });
    return res.status(200).json(messages);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to Fetch, Server Error", error });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const { msgDelId } = req.params;
    const msg = await Message.findById(msgDelId);

    if (!msg) return res.status(404).json({ message: "Message Not found" });

    msg.status = false;

    await msg.save();
    return res.status(200).json({ msg });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
