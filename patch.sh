kubectl -n istio-system patch service istio-ingressgateway --patch "$(cat<<EOF
metadata:
annotations:
service.beta.kubernetes.io/aws-load-balancer-ssl-cert: "arn:aws:acm:eu-west-1:201655463889:certificate/ed9fea61-5c31-4fef-a21c-4d878087690e"
service.beta.kubernetes.io/aws-load-balancer-backend-protocol: tcp
service.beta.kubernetes.io/aws-load-balancer-ssl-ports: "https"
service.beta.kubernetes.io/aws-load-balancer-connection-idle-timeout: "3600"
EOF
)"
