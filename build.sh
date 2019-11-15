DIR=$(dirname $0)
cd $DIR

docker image rm -f grafana:setup
docker image rm -f satyajitpatil/grafana:setup
docker build -t grafana:setup ${DIR}
docker tag grafana:setup satyajitpatil/grafana:setup
docker push satyajitpatil/grafana:setup

