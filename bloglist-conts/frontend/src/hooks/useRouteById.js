import { useMatch } from "react-router-dom";
import { useSelector } from "react-redux";

const useRouteById = (routePattern, selector) => {
  const match = useMatch(routePattern);
  const entities = useSelector(selector);

  const entityId = match?.params.id;
  const entity = entities.find(
    (entity) => entity.id === Number(entityId) || entity.id === entityId,
  );

  return entity;
};

export default useRouteById;
