import { Ticket } from "./models";

function generateDate(daysAgo: number): Date {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date;
}

export const MOCK_TICKETS: Ticket[] = [
  {
    id: 1,
    subject: 'Issue with login functionality',
    createdAt: generateDate(1),
    department: 'Support',
    priority: 'HIGH',
    customer: { id: 2, firstname: 'Jane', lastname: 'Smith',  email: 'jane.smith@example.com', createdAt: generateDate(19) },
    supportPersonnel: { id: 3, firstname: 'Mike ', lastname: 'Johnson',  email: 'mike.johnson@example.com', createdAt: generateDate(12) },
    messages: [
      {
        id: 1,
        text: 'I cannot log in to the system. It keeps giving an error message.',
        createdAt: generateDate(10),
        sender: { id: 2, firstname: 'Jane', lastname: 'Smith', email: 'jane.smith@example.com', createdAt: generateDate(37) }
      },
      {
        id: 2,
        text: 'Thanks for reporting the issue. We are investigating it.',
        createdAt: generateDate(120),
        sender: { id: 3, firstname: 'Mike', lastname: 'Johnson',  email: 'mike.johnson@example.com', createdAt: generateDate(11) }
      }
    ]
  },
  {
    id: 2,
    subject: 'Issue with login functionality 2',
    createdAt: generateDate(1),
    department: 'Support',
    priority: 'LOW',
    customer: { id: 2, firstname: 'Jane', lastname: 'Smith',  email: 'jane.smith@example.com', createdAt: generateDate(19) },
    supportPersonnel: { id: 3, firstname: 'Mike ', lastname: 'Johnson',  email: 'mike.johnson@example.com', createdAt: generateDate(12) },
    messages: [
      {
        id: 1,
        text: 'I cannot log in to the system. It keeps giving an error message.',
        createdAt: generateDate(10),
        sender: { id: 2, firstname: 'Jane', lastname: 'Smith', email: 'jane.smith@example.com', createdAt: generateDate(37) }
      },
      {
        id: 2,
        text: 'Thanks for reporting the issue. We are investigating it.',
        createdAt: generateDate(120),
        sender: { id: 3, firstname: 'Mike', lastname: 'Johnson',  email: 'mike.johnson@example.com', createdAt: generateDate(11) }
      }
    ]
  },
];