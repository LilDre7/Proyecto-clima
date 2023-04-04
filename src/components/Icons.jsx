import React from "react";

function Icons(props) {
    let icon = props.icon;

    switch (icon) {
        case "Clear sky":
            icon = "public/images/clearsky.svg";
            console.log("SOLEADO");
            break;
        case "few clouds":
            icon = "public/images/nublado.svg";
            console.log("Noche oscura");
            break;
        case "show rain":
            icon = "public/images/nublado.svg";
            console.log("Lluvia con cafe");
            break;
        case "thunderstorm":
            icon = "public/images/thunderstorm.svg";
            break;
        case "overcast":
            icon = "public/images/overcast.svg";
            break;
        default:
            icon = "public/images/clearsky.svg";
            console.log("LIMPIO");
    }

    return (
        <div className="">
            <img className="w-[180px] m-auto " src={icon} alt={icon} />
        </div>
    );
}

export default Icons;
