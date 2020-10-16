import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/Local.svg';

import './styles.css';
import api from '../../services/api';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [175, 0]
});

export interface OrphanageProps {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekedns: string;
    images: Array<{
            id: string;
            url: string;
        }>
}

function OrphanagesMap () {

    const [orphanages, setOrphanages] = useState<OrphanageProps[]>([]);

    useEffect(() => {
        api.get('/orphanages').then(response => {
            console.log(response.data);
            setOrphanages(response.data);
        });
        
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :D</p>
                </header>

                <footer>
                    <strong>Portão</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>
            
                <Map 
                    center={[-29.6935827, -51.2316592]}
                    zoom={15}
                    style={{ width: '100%', height: '100%' }}
                    
                >
                    <TileLayer 
                        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {orphanages.map(orphanage => (
                        <Marker 
                        key={orphanage.id}
                        icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                        >
                            <Popup 
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                               {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    ))}
                </Map>
            
            <Link to="/orphanages/create" className="create-orphanage" >
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;