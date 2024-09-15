export interface InstructionDataEntity {
  id?: number;
  text?: string;
}

export const instructionsData: InstructionDataEntity[] = [
  {
    id: 1,
    text: `Create a personal library: add the books you intend to read 
to it.`,
  },
  {
    id: 2,
    text: `Create your first workout: define a goal, choose a period, start training.`,
  },
];
