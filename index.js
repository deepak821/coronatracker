function updateMap() {
 
    fetch("data.json").then(Response=>Response.json()).then(rsp=>{
        console.log(rsp.data);
        rsp.data.forEach(element => {
             latitude=element.latitude;
             longitude=element.longitude;
             cases=element.infected;
             recover=element.recovered;
             if(cases>250)
             color="rgb(255,0,0)";
             else
             color=`rgb(${cases},0,0)`;
            
             // create the popup
             var popup = new mapboxgl.Popup({ offset: 25}).setText(
    `INFECTED: ${cases} 
     RECOVER: ${recover}`
    );
        //set marker
         new mapboxgl.Marker({
             color:color
            }).setLngLat([longitude,latitude]).setPopup(popup) //set popup
            .addTo(map)
        });
    })
}

updateMap();