<template>
    <div>
        <div v-for="num in 4">
            <div class="box shadow">
                <div class="circle"></div>
            </div>
        </div>
        <div id="overlay" class="background"></div>
        <div id="overlay-content">
            <h2>Hello</h2>
        </div>
        <div class="container">
            <div class="letter-shadows">
                <span>s</span>
                <span>h</span>
                <span>a</span>
                <span>d</span>
                <span>o</span>
                <span>w</span>
                <span>s</span>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.box {
    width: 25%;
    min-width: 250px;
    display: block;
    height: 50px;
    position: relative;
    border-radius: 5px;
    background: linear-gradient(to right, #abbd73 35%, #d6e2ad 100%);
    margin-bottom: 40px;
    padding: 15px 25px 0 40px;
    color: darkslategray;
    box-shadow: 1px 2px 1px -1px #777;
    transition: background 200ms ease-in-out;
}

.shadow {
    position: relative;

    &:before {
        z-index: -1;
        position: absolute;
        content: '';
        bottom: 13px;
        right: 7px;
        width: 75%;
        top: 0;
        box-shadow: 0 15px 10px #777;
        transform: rotate(4deg);
        transition: all 150ms ease-in-out;
    }
}

.box:hover {
    background: linear-gradient(to right, #abbd73 0%, #abbd73 100%);
}

.shadow:hover::before {
    transform: rotate(0deg);
    bottom: 20px;
    z-index: -10;
}

.circle {
    position: absolute;
    top: 14px;
    left: 15px;
    border-radius: 50%;
    box-shadow: inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5), inset 0 0 0 25px antiquewhite;
    width: 20px;
    height: 20px;
    display: inline-block;
}


// ===============

#overlay
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	filter: blur(20px);// saturate(180%);
	pointer-events: none;
	
	clip-path: url("#modal");
	
	&:after
	{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: white;
		display: block;
		opacity: 0.3;
	}
}
#overlay-content
{
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	pointer-events: none;
	top: 25%;
	bottom: 25%;
	left: 16.666%;
	right: 16.666%;
	border: 1px solid white;
	padding: 10px;
	box-shadow: 3px 3px 20px 0px rgba(0,0,0,0.45);
	
	h2
	{
		font-size: 30px;
	}
}

// ====================


.container {
//   width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}    
.letter-shadows {
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px #ced0d3;
    color: white;
    letter-spacing: -32px;
    font-family: 'Anton', Arial, sans-serif;
    user-select: none;
    text-transform: uppercase;
    font-size: 150px;
    transition: all 0.25s ease-out;
}
.shadows:hover {
    text-shadow: -16px 6px 15px #ced0d3;
}
</style>
