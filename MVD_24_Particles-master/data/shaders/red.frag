#version 330

in vec2 v_uv;

out vec4 fragColor;

uniform sampler2D u_screen_texture;

in vec3 v_vertex_world_pos;

void main(){

    //vec3 col = texture(u_screen_texture, v_uv).xyz;
    fragColor = vec4(1.0, 0, 0, 1.0);
    
}