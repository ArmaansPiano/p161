AFRAME.registerComponent("bowling-balls",{
    init: function() {
        this.shootBullet();
    },
    shootBullet:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.code==="z"){
                var bullet=document.createElement("a-entity");
                bullet.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.1,
                });
                bullet.setAttribute("gltf-model",".models/bowling_ball/scene.gltf");
                var cam = document.querySelector("#camera");
                pos=cam.getAttribute("position");
                bullet.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z,
                });
                var camera=document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                bullet.setAttribute("velocity",direction.multiplyScalar(-10));
                var scene=document.querySelector("#scene")
                scene.appendChild(bullet);
            }
        });
    }
});
