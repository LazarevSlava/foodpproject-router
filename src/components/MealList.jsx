import { Meal } from './Meal';

function MealList({ meals }) {
    return (
        <div className="list">
            {meals.map((meal) => (
                <Meal key={meals.idMeal} {...meal} />
            ))}
        </div>
    );
}

export { MealList };
