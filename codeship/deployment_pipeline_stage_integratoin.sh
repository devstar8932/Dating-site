#!/usr/bin/env bash
# Deploy to via pushing to a remote git repository.
#
# Add the following environment variables to your project configuration and make
# sure the public SSH key from your projects General settings page is allowed to
# push to the remote repository as well.
# * REMOTE_REPOSITORY, e.g. "git@github.com:codeship/documentation.git"
# * REMOTE_BRANCH, e.g. "production"
#
# Include in your builds via
# \curl -sSL https://raw.githubusercontent.com/codeship/scripts/master/deployments/git_push.sh | bash -s
# REMOTE_REPOSITORY=${REMOTE_REPOSITORY:?'You need to configure the REMOTE_REPOSITORY environment variable!'}
# REMOTE_BRANCH=${REMOTE_BRANCH:?'You need to configure the REMOTE_BRANCH environment variable!'}
# set -e
# Copy the WebClient build to deployment
#scp  -r ~/clone/build 57f0ed9789f5cfa4160000ef@webc-lbmegha.rhcloud.com:/tmp
#git fetch --unshallow || true
#git push -f ssh://57f0ed9789f5cfa4160000ef@webc-lbmegha.rhcloud.com/~/git/webc.git/ ${CI_COMMIT_ID}:master
#
# Copy client to Integration Branch
#
scp  -r ~/clone/build 584c08ee89f5cf4315000129@int-lbmegha.rhcloud.com:/tmp
ssh 584c08ee89f5cf4315000129@int-lbmegha.rhcloud.com 'mkdir -p /var/lib/openshift/584c08ee89f5cf4315000129/app-root/runtime/repo/server/lagnachibolni/matrimony/static'
ssh 584c08ee89f5cf4315000129@int-lbmegha.rhcloud.com 'cp -r /tmp/build/* /var/lib/openshift/584c08ee89f5cf4315000129/app-root/runtime/repo/server/lagnachibolni/matrimony/static'
