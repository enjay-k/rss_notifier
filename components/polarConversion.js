//Adapted from https://github.com/plahteenlahti/HelloClock

const polarToCartesian = (cX, cY, radius, deg) => {//Check back to see if cX and cY are necessary
    const rad = ((deg - 90) * Math.PI) / 180;
    return {
        x: cX + radius * Math.cos(rad),
        y: cY + radius * Math.sin(rad)
    };
}

export default polarToCartesian;