import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category() {
    const { goBack } = useHistory();

    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? (
                <Preloader></Preloader>
            ) : (
                <MealList meals={meals}></MealList>
            )}
        </>
    );
}
export { Category };
