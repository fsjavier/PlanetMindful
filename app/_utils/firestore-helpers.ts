import { Timestamp } from "firebase/firestore";

export function convertFirestoreData(data: any): any {
  if (!data) {
    return null;
  }

  if (data instanceof Timestamp) {
    return data.toDate().toISOString();
  }

  if (Array.isArray(data)) {
    return data.map(convertFirestoreData);
  }

  if (typeof data === "object") {
    return Object.entries(data).reduce((result, [key, value]) => {
      result[key] = convertFirestoreData(value);
      return result;
    }, {} as Record<string, any>);
  }

  return data;
}
