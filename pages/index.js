import React from 'react';
import Layout from '../components/MyLayout';
import ContentBlock from '../components/ContentBlock';

const data = [
    {
        name: 'about',
    },
    {
        name: 'tariff',
    },
    {
        name: 'scheme',
    },
    {
        name: 'clients',
    },
    {
        name: 'warranites',
    },
    {
        name: 'contacts',
    },
    {
        name: 'more blocks',
    },
    {
        name: 'even more blocks',
    },
    {
        name: 'last block',
    }
];

const Index = () => (
    <Layout data={data}>
        <h1>Big It topics</h1>
        {data.map(item => (
            <ContentBlock key={item.name} item={item}>
                <span>{item.name}</span>
            </ContentBlock>
        ))}
    </Layout>
);

export default Index;
