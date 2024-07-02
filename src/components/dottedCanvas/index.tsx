import style from "src/pages/main_content/sections/home/index.sass";
import {useEffect, useRef, useState} from "react";

interface DottedCanvasProps {
    img: string
}

function DottedCanvas({img}: DottedCanvasProps) {
    const canvasRef = useRef(null);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setWindowSize(window.innerWidth)
    })

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        const image = document.createElement('img');
        image.src = img;

        const ctx = canvas.getContext("2d");

        class Particle {
            constructor(effect, x, y, color) {
                this.effect = effect;
                this.x = Math.random() * this.effect.width;
                this.y = Math.random() * this.effect.height;
                this.originX = Math.floor(x);
                this.originY = Math.floor(y);
                this.color = color;
                this.size = this.effect.gap;
                this.vx = 0;
                this.vy = 0;
                this.ease = 0.3;
                this.friction = 0.9;
                this.dx = 0;
                this.dy = 0;
                this.distance = 0;
                this.force = 0;
                this.angle = 0;
            }

            draw(context) {
                context.fillStyle = this.color;
                context.fillRect(this.x, this.y, this.size, this.size);
            }

            update() {
                this.dx = this.effect.mouse.x - this.x;
                this.dy = this.effect.mouse.y - this.y;
                this.distance = this.dx * this.dx + this.dy * this.dy;
                this.force = -this.effect.mouse.radius / this.distance;

                if (this.distance < this.effect.mouse.radius) {
                    this.angle = Math.atan2(this.dy, this.dx);
                    this.vx += this.force * Math.cos(this.angle);
                    this.vy += this.force * Math.sin(this.angle);
                }

                this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
                this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
            }
        }

        class Effect {
            constructor(width, height) {
                this.width = width;
                this.height = height;
                this.particlesArray = [];
                this.image = image;
                this.gap = 2;
                this.mouse = {
                    radius: 3000,
                    x: undefined,
                    y: undefined,
                };

                let canvasRect = canvas.getBoundingClientRect();

                window.addEventListener('mousemove', (e) => {
                    this.mouse.x = e.clientX - canvasRect.left;
                    this.mouse.y = e.clientY - canvasRect.top + window.scrollY;
                })
            }

            init(context) {
                context.drawImage(this.image, 20, 40, this.width - 40, this.height - 40);
                const pixels = context.getImageData(0, 0, this.width, this.height).data;
                for (let y = 0; y < this.height; y += this.gap) {
                    for (let x = 0; x < this.width; x += this.gap) {
                        const index = (y * this.width + x) * 4;
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        const alpha = pixels[index + 3];
                        const color = `rgb(${red},${green},${blue})`;

                        if (alpha > 0) {
                            this.particlesArray.push(new Particle(this, x, y, color));
                        }
                    }
                }
            }

            draw(context) {
                this.particlesArray.forEach(particle => particle.draw(context));
            }

            update() {
                this.particlesArray.forEach(particle => particle.update());
            }
        }

        const effect = new Effect(canvas.width, canvas.height);
        effect.init(ctx);

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            effect.draw(ctx);
            effect.update();
            requestAnimationFrame(animate);
        }

        animate();
    }, [])

    return (
        <canvas id={style.canvas} ref={canvasRef}/>
    )
}

export default DottedCanvas