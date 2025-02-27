import { Model } from "mongoose";

interface IDose {
  title: string;
  description: string;
  note: string;
  time: string;
  dosage: number;
  frequency: number;
  days: number;
}

interface ITest {
  title: string;
  report: boolean;
  note: string;
}

interface IDiagnosis {
  title: string;
  note: string;
}

interface ISymptom {
  title: string;
  days: number;
  note: string;
}

export interface ITestDocument {
  title: string;
  testSuggestionName: string;
  testSuggestion: string[];
  searchedDrug: string[];
  dose?: IDose[];
  test?: ITest[];
  diagnosis?: IDiagnosis[];
  symptom?: ISymptom[];
}

export type TestModel = Model<ITestDocument, object>;
