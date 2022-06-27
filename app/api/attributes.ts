import axios from "axios";

export async function getAttributes() {
  const headers = {
    "X-Token":
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuY2hfdWlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwiZW1haWwiOiJhZG1pbkBqYW1lcy5jbyIsImV4cCI6MTY1NjY0NDc1OSwiaWF0IjoxNjU2MDM5OTU5LCJpZCI6MywibmFtZSI6ImFkbWluSmFtZXMgQm91bGFuZ2VyaWUiLCJzdWIiOjN9.1zhttgc9C88mhhKFxvdEirXdVmxFD8iDEx2nodKgV0N6rj3mSzuXXxj_vpqKYwfjZg6rNoEoHMY3QcXiOnYIpAWuih8U2jP-Sl04mVutHX_AxU1sRFvVp40GFVHnosf6HEFArlRWDx7693kksaIRHXVEf3Re2cvFteY3T00ZrqM",
    refresh_token:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYwMzk2MjEsInJlZnJlc2hfdWlkIjoiZTZhNjQzNjEtMGZkMi00N2RkLWIzMDEtMjE3N2MyZTk3YTY1Iiwic3ViIjozfQ.vShOWfwCDnUE8caDipiJ-zWAva7hdJysMJQOQU_BjoJDj6xJKIrqFk5b5JdrIb21DL_v98PdEi1qRmHluShZDCzuYGbbQ5iOJ5NqflOcnQwxPLsDXWjDNE4a1PVzoUTlRukbVg79fYShun1pb8H3LvoOYLGJUrz_gXDdJY8IMhY",
  };

  return axios({
    headers,
    method: "GET",
    url: "https://dev.rushs.app/api/attributes",
  });
}

export async function getAttribute(id: number) {
  const headers = {
    "X-Token":
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuY2hfdWlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwiZW1haWwiOiJhZG1pbkBqYW1lcy5jbyIsImV4cCI6MTY1NjY0NDc1OSwiaWF0IjoxNjU2MDM5OTU5LCJpZCI6MywibmFtZSI6ImFkbWluSmFtZXMgQm91bGFuZ2VyaWUiLCJzdWIiOjN9.1zhttgc9C88mhhKFxvdEirXdVmxFD8iDEx2nodKgV0N6rj3mSzuXXxj_vpqKYwfjZg6rNoEoHMY3QcXiOnYIpAWuih8U2jP-Sl04mVutHX_AxU1sRFvVp40GFVHnosf6HEFArlRWDx7693kksaIRHXVEf3Re2cvFteY3T00ZrqM",
    refresh_token:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYwMzk2MjEsInJlZnJlc2hfdWlkIjoiZTZhNjQzNjEtMGZkMi00N2RkLWIzMDEtMjE3N2MyZTk3YTY1Iiwic3ViIjozfQ.vShOWfwCDnUE8caDipiJ-zWAva7hdJysMJQOQU_BjoJDj6xJKIrqFk5b5JdrIb21DL_v98PdEi1qRmHluShZDCzuYGbbQ5iOJ5NqflOcnQwxPLsDXWjDNE4a1PVzoUTlRukbVg79fYShun1pb8H3LvoOYLGJUrz_gXDdJY8IMhY",
  };
  return axios({
    headers,
    method: "GET",
    url: `https://dev.rushs.app/api/attributes/${id}`,
  });
}

export async function deleteAttribute(id: number) {
  const headers = {
    "X-Token":
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuY2hfdWlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwiZW1haWwiOiJhZG1pbkBqYW1lcy5jbyIsImV4cCI6MTY1NjY0NDc1OSwiaWF0IjoxNjU2MDM5OTU5LCJpZCI6MywibmFtZSI6ImFkbWluSmFtZXMgQm91bGFuZ2VyaWUiLCJzdWIiOjN9.1zhttgc9C88mhhKFxvdEirXdVmxFD8iDEx2nodKgV0N6rj3mSzuXXxj_vpqKYwfjZg6rNoEoHMY3QcXiOnYIpAWuih8U2jP-Sl04mVutHX_AxU1sRFvVp40GFVHnosf6HEFArlRWDx7693kksaIRHXVEf3Re2cvFteY3T00ZrqM",
    refresh_token:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYwMzk2MjEsInJlZnJlc2hfdWlkIjoiZTZhNjQzNjEtMGZkMi00N2RkLWIzMDEtMjE3N2MyZTk3YTY1Iiwic3ViIjozfQ.vShOWfwCDnUE8caDipiJ-zWAva7hdJysMJQOQU_BjoJDj6xJKIrqFk5b5JdrIb21DL_v98PdEi1qRmHluShZDCzuYGbbQ5iOJ5NqflOcnQwxPLsDXWjDNE4a1PVzoUTlRukbVg79fYShun1pb8H3LvoOYLGJUrz_gXDdJY8IMhY",
  };

  return axios({
    headers,
    method: "DELETE",
    url: `https://dev.rushs.app/api/attributes/delete/${id}`,
  });
}

export async function createAttribute(data: any) {
  const headers = {
    "X-Token":
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuY2hfdWlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwiZW1haWwiOiJhZG1pbkBqYW1lcy5jbyIsImV4cCI6MTY1NjY0NDc1OSwiaWF0IjoxNjU2MDM5OTU5LCJpZCI6MywibmFtZSI6ImFkbWluSmFtZXMgQm91bGFuZ2VyaWUiLCJzdWIiOjN9.1zhttgc9C88mhhKFxvdEirXdVmxFD8iDEx2nodKgV0N6rj3mSzuXXxj_vpqKYwfjZg6rNoEoHMY3QcXiOnYIpAWuih8U2jP-Sl04mVutHX_AxU1sRFvVp40GFVHnosf6HEFArlRWDx7693kksaIRHXVEf3Re2cvFteY3T00ZrqM",
    refresh_token:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYwMzk2MjEsInJlZnJlc2hfdWlkIjoiZTZhNjQzNjEtMGZkMi00N2RkLWIzMDEtMjE3N2MyZTk3YTY1Iiwic3ViIjozfQ.vShOWfwCDnUE8caDipiJ-zWAva7hdJysMJQOQU_BjoJDj6xJKIrqFk5b5JdrIb21DL_v98PdEi1qRmHluShZDCzuYGbbQ5iOJ5NqflOcnQwxPLsDXWjDNE4a1PVzoUTlRukbVg79fYShun1pb8H3LvoOYLGJUrz_gXDdJY8IMhY",
  };

  return axios({
    headers,
    method: "POST",
    url: `https://dev.rushs.app/api/attributes/new`,
    data,
  });
}

export async function editAttribute(data: any, id: number) {
  const headers = {
    "X-Token":
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuY2hfdWlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwiZW1haWwiOiJhZG1pbkBqYW1lcy5jbyIsImV4cCI6MTY1NjY0NDc1OSwiaWF0IjoxNjU2MDM5OTU5LCJpZCI6MywibmFtZSI6ImFkbWluSmFtZXMgQm91bGFuZ2VyaWUiLCJzdWIiOjN9.1zhttgc9C88mhhKFxvdEirXdVmxFD8iDEx2nodKgV0N6rj3mSzuXXxj_vpqKYwfjZg6rNoEoHMY3QcXiOnYIpAWuih8U2jP-Sl04mVutHX_AxU1sRFvVp40GFVHnosf6HEFArlRWDx7693kksaIRHXVEf3Re2cvFteY3T00ZrqM",
    refresh_token:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYwMzk2MjEsInJlZnJlc2hfdWlkIjoiZTZhNjQzNjEtMGZkMi00N2RkLWIzMDEtMjE3N2MyZTk3YTY1Iiwic3ViIjozfQ.vShOWfwCDnUE8caDipiJ-zWAva7hdJysMJQOQU_BjoJDj6xJKIrqFk5b5JdrIb21DL_v98PdEi1qRmHluShZDCzuYGbbQ5iOJ5NqflOcnQwxPLsDXWjDNE4a1PVzoUTlRukbVg79fYShun1pb8H3LvoOYLGJUrz_gXDdJY8IMhY",
  };

  return axios({
    headers,
    method: "PUT",
    url: `https://dev.rushs.app/api/attributes/edit/${id}`,
    data,
  });
}
