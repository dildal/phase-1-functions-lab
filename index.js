// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return pickupLocation >= 42 ? pickupLocation - 42 : 42 - pickupLocation;
}

function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination){
    if(start >= destination){
        return (start - destination) * 264;
    } else{
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if(distance > 2500){
        return 'cannot travel that far'
    } else if(distance > 2000){
        return 25;
    } else if(distance > 400){
        return (distance - 400) * .02;
    } else {
        return 0;
    }
}