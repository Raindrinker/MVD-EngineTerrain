#version 330

//out color
out vec4 fragColor;

in float v_time;

float random(vec2 co){
	highp float a = 12.9898;
	highp float b = 78.233;
	highp float c = 43758.5453;
	highp float dt = dot(co.xy ,vec2(a,b));
	highp float sn = mod(dt,3.14);
	return fract(sin(sn) * c);
}

void main(){

    fragColor = vec4(1.0 * sin(v_time*10), 1.0* sin(v_time*10), 1.0* sin(v_time*10), v_time);
}
