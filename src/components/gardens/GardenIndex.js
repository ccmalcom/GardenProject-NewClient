import React, { useState, useEffect } from 'react';
//import DisplayPlants from './plantTable/PlantTable';
//import CreatePlant from './createPlant/CreatePlant';
//import PlantView from './PlantView';
import { Container, Row } from 'reactstrap';
import GardenTable from './GardenTable';
import GardenView from './GardenView';
import GardenEdit from './GardenEdit';
import { Table, Button } from 'reactstrap';

const GardenIndex = (props) => {

    const [plants, setPlants] = useState([]);
    const [viewActive, setViewActive] = useState(false);
    const [plantToView, setPlantToView] = useState([]);
    const [editModalActive, setEditModalActive] = useState(false);
    const [plantToDelete, setPlantToDelete] = useState([]);


    
    let baseURL = 'https://wd85-plant-it2.herokuapp.com/garden/all';

    const fetchGarden = () => {
        fetch(baseURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => res.json())
            .then((plantData) => {
                setPlants(plantData)
                console.log('plants:',plants, plantData);
            })
    }



    //view functions
    const viewPlant = (plant) => {
        setPlantToView(plant);
        console.log(plant);
    }
    const viewOn = () => {
    setViewActive(true)
}
const viewOff = () => {
    setViewActive(false)
}

    const deletePlant = (plant) =>{
        setPlantToDelete(plant);
    }

// useEffect(() => {
    // fetchGarden();
// }, [])

return (
<div>
    <Button onClick={fetchGarden}>MyGarden</Button>
    <Container>
        <div>
            <GardenTable plants={plants} plantToView={plantToView} viewPlant={viewPlant} viewOn={viewOn} fetchGarden={fetchGarden} token={props.token} deletePlant={deletePlant} plantToDelete={plantToDelete} />

            {/* {viewActive ? <GardenView plantToView={plantToView} viewOff={viewOff} token={props.token} fetchGarden={fetchGarden} /> : <></>} */}
        </div>
    <div>
        {viewActive ? <GardenView fetchGarden={fetchGarden} token={props.token} viewOff={viewOff} plantToView={plantToView} setEditModalActive={setEditModalActive}/> : null}
        {editModalActive ? <GardenEdit token={props.token} fetchGarden={fetchGarden} plantToView={plantToView} setEditModalActive={setEditModalActive}/>: null }
    </div>
    </Container>
    </div>
)
}




export default GardenIndex;