const faqsController = {};
import faqsModel from "../models/Faqs.js";

//SELECT
faqsController.getFaqs = async (req, res) => {
  try {
    const faqs = await faqsModel.find();
    res.status(200).json(faqs);
  } catch (error) {
    console.log("error" + error);
    res.status(500).json("Internal server error");
  }
};

// INSERT
faqsController.createFaqs = async (req, res) => {
  const { question, answer, level, isActive } = req.body;
  
  try {
    // Validaciones

    // Campos vacíos
    if (!question || !answer || !level || !isActive) {
      return res.status(400).json("Please fill in all the inputs :(");
    }

    // Validación del nivel
    if (level < 1 || level > 10) {
      return res.status(400).json("Please insert a valid level (1-10) :(");
    }

    // Validación de longitud de la pregunta y respuesta
    if (question.length < 4 || answer.length < 2) {
      return res.status(400).json("Too short :(");
    }

    // Guardar la nueva FAQ
    const newFaqs = new faqsModel({ question, answer, level, isActive });
    await newFaqs.save();

    return res.status(200).json({ message: "FAQ saved successfully!" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json("Internal server error");
  }
};

// DELETE
faqsController.deleteFaqs = async (req, res) => {
  try {
    const faqToDelete = await faqsModel.findByIdAndDelete(req.params.id);
    
    if (!faqToDelete) {
      return res.status(404).json("FAQ not found");
    }

    res.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json("Internal server error");
  }
};

// UPDATE
faqsController.updateFaqs = async (req, res) => {
  const { question, answer, level, isActive } = req.body;

  try {
    // Validaciones
    if (!question || !answer || !level || !isActive) {
      return res.status(400).json("Please fill in all the inputs :(");
    }
    if (level < 1 || level > 10) {
      return res.status(400).json("Please insert a valid level (1-10) :(");
    }
    if (question.length < 4 || answer.length < 2) {
      return res.status(400).json("Too short :(");
    }

    const faqsUpdate = await faqsModel.findByIdAndUpdate(
      req.params.id,
      { question, answer, level, isActive },
      { new: true }
    );

    if (!faqsUpdate) {
      return res.status(404).json("FAQ not found");
    }

    res.status(200).json({ message: "FAQ updated successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json("Internal server error");
  }
};

export default faqsController;
