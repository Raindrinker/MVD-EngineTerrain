#version 330

in vec2 v_uv;

out vec4 fragColor;

uniform sampler2D u_screen_texture;

in vec3 v_vertex_world_pos;

in vec3 v_normal;

void main(){

    float height = v_vertex_world_pos.y/20;

    vec4 final_color = vec4(height, height, height, 1.0);

    if (height < 0.05) {
    	final_color.r += 0.1;
	    final_color.g += 0.1;
	    final_color.b += 0.1;
    	final_color.b *= 2;
    } else if (height < 0.2) {
    	final_color.r *= 0.8;
    	final_color.g *= 1.4;
    	final_color.b *= 0.8;
    } else if (height < 0.5) {
    	final_color.r *= 1.4;
    	final_color.g *= 0.8;
    	final_color.b *= 0.8;
    } else if (height > 0.8) {
    	final_color.r *= 1.5;
    	final_color.g *= 1.5;
    	final_color.b *= 1.5;
    }

    if (mod(height, 0.02) < 0.003) {
    	final_color.r *= 0.8;
    	final_color.g *= 0.8;
    	final_color.b *= 0.8;
    }

    final_color.r += 0.05;
    final_color.g += 0.05;
    final_color.b += 0.05;

    //vec3 col = texture(u_screen_texture, v_uv).xyz;
    fragColor = final_color;
    
}