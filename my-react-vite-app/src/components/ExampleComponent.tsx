import React from 'react';

interface ExampleComponentProps {
    title: string;
    count: number;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ title, count }) => {
    const [currentCount, setCurrentCount] = React.useState(count);

    const incrementCount = () => {
        setCurrentCount(currentCount + 1);
    };

    return (
        <div>
            <h1>{title}</h1>
            <p>Current Count: {currentCount}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default ExampleComponent;