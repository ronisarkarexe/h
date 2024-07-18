import { ITestDocument } from "./test.interface";
import { TestDocument } from "./test.model";

const createTestDocument = async (
  payload: ITestDocument
): Promise<ITestDocument> => {
  const result = await TestDocument.create(payload);
  return result;
};

const getAllTestDocuments = async (): Promise<ITestDocument[]> => {
  const result = await TestDocument.find({});
  return result;
};

const getTestDocument = async (
  payload: string
): Promise<ITestDocument | null> => {
  const result = await TestDocument.findOne({ _id: payload });
  return result;
};

const updateTestDocument = async (
  userId: string,
  payload: Partial<ITestDocument>
) => {
  const result = await TestDocument.findOneAndUpdate({ _id: userId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTestDocument = async (id: string): Promise<void> => {
  await TestDocument.deleteOne({ _id: id });
};

export const TestDocumentService = {
  createTestDocument,
  getAllTestDocuments,
  getTestDocument,
  updateTestDocument,
  deleteTestDocument,
};
