export interface ExpensesByCategory {
    salaries: number;
    supplies: number;
    services: number; 
}

export interface Month {
    _id: string;
    month: string;
    expenses: number;
    revenue: number;
    nonOperationalExpenses: number;
    operationalExpenses: number;
}

export interface Day {
    _id: string;
    date: string;
    revenue: number;
    expenses: number;
}

export interface GetKpisResponse {
    _id: string;
    __v: number;
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
}