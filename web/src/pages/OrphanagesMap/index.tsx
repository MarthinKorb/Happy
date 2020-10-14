import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/Local.svg';

import './styles.css';

function OrphanagesMap () {
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
                </Map>
            
            <Link to="" className="create-orphanage" >
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;