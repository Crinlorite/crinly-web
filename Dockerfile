FROM nginx:alpine
# Estáticos
COPY index.html style.css favicon.png /usr/share/nginx/html/
COPY privacy /usr/share/nginx/html/privacy/
# Plantilla nginx: el entrypoint de la imagen hace envsubst de ${FEEDBACK_SECRET}
# (única env que se sustituye; las $vars de nginx se respetan) -> conf.d/default.conf
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
