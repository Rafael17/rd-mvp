import { Expense } from './expense';

export class Project {
    _id: string;
    title: string;
    cost: number;
    expenses: Expense[];
    isHidden: boolean;
}
