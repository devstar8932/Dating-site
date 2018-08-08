#!/usr/bin/env bash
# Ship to Production
# We want to deploy optimized resources on production
# Hence clean n build
gulp clean
gulp build

# Compress Webclient
tar -czvf lb_webclient.tar.gz ./build

# Ship Webclient
scp ~/clone/lb_webclient.tar.gz ${PRODUCTION_USER}@${PRODUCTION_IP}:/tmp

# Uncompress
ssh ${PRODUCTION_USER}@${PRODUCTION_IP} 'tar -zxvf  /tmp/lb_webclient.tar.gz -C /tmp'

# Switch to new source
ssh ${PRODUCTION_USER}@${PRODUCTION_IP} 'mv /webapps/lagnachibolni/source/lbwebclient/ /webapps/lagnachibolni/source/lbwebclient_old'
ssh ${PRODUCTION_USER}@${PRODUCTION_IP} 'mv /tmp/build/ /webapps/lagnachibolni/source/lbwebclient'

# Cleanup on Production
ssh ${PRODUCTION_USER}@${PRODUCTION_IP} 'rm -r /webapps/lagnachibolni/source/lbwebclient_old'
ssh ${PRODUCTION_USER}@${PRODUCTION_IP} 'rm /tmp/lb_webclient.tar.gz'

# Clean on Codeship
rm  ~/clone/lb_webclient.tar.gz
