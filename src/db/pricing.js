import { v4 as uuidv4 } from 'uuid';

const PRICING=[
    {
        id: uuidv4(),
        title: 'FREE',
        cost: '$ 0 / month',
        items: [
            '1 ',
            '10 ',
            'Unlimited ',
            'Set And Manage Permissions',
            'API & extension support',
            'Developer support',
            'A / B Testing'
        ]
    },
    {
        id: uuidv4(),
        title: 'STARTUP',
        cost: '$ 29 / month',
        items: [
            '1 ',
            '10 ',
            'Unlimited ',
            'Set And Manage Permissions',
            'API & extension support',
            'Developer support',
            'A / B Testing'
        ]
    },
    {
        id: uuidv4(),
        title: 'PRO',
        cost: '$ 49 / month',
        items: [
            '1 ',
            '10 ',
            'Unlimited ',
            'Set And Manage Permissions',
            'API & extension support',
            'Developer support',
            'A / B Testing'
        ]
    },
    {
        id: uuidv4(),
        title: 'ULTRA',
        cost: '$ 99 / month',
        items: [
            '1 ',
            '10 ',
            'Unlimited ',
            'Set And Manage Permissions',
            'API & extension support',
            'Developer support',
            'A / B Testing'
        ]
    }
];

export default PRICING;

export const PRICING_SUBMENU=[
    {
        id: uuidv4(),
        items: [
                'Monthly',
                'Yearly'
        ]
    }
];