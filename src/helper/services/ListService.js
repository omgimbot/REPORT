import { api } from "boot/axios";
import { createToken } from "boot/createToken";
import { LocalStorage } from "quasar";

const dataInstansi = LocalStorage.getItem("data");

const ListService = {
  getListLayanan() {
    return api.get(`layanan/getAll`);
  },
  getListInstansi() {
    return api.get(`instansi/getAll`);
  },
  getListRfid() {
    return api.get(`card/getAll`);
  },
  getListJabatan() {
    return api.get(`jabatan/getByInstansi/${dataInstansi.user.KODE_INSTANSI}`);
  },
};

export { ListService };
