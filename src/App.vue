<template>
  <div>
    <ul v-for="(bc, index) in jsonData.breadCrumb" :key="index">
      <li>
        <span @click="Childrens(bc.id)">
          {{ bc.name }}
        </span>
        <ul
          v-if="expandIs(bc.id)"
          v-for="(item, i) in jsonData.childs"
          :key="i"
        >
          <li v-if="item.parentId == bc.id">
            <img :src="icons(item)" />{{ item.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      jsonData: {
        id: "c20d12345678901234567892",
        name: "Akbank Cases",
        clientStoreId: "c20d12345678901234567892",
        breadCrumb: [
          {
            id: "c20d12345678901234567892",
            name: "Akbank Cases",
          },
        ],
        childsCount: 7,
        docsCount: 42,
        awaitingDocsCount: 32,
        size: 0,
        isFolder: true,
        totalPages: 1,
        totalCount: 7,
        pageNumber: "1",
        countPerPage: "50",
        childs: [
          {
            id: "f21d12345678901234567891",
            objectType: "folder",
            parentId: "c20d12345678901234567892",
            name: "Governance Reports",
            description: "",
            updatedAt: "2023-09-06T10:37:17.446Z",
            clientStoreId: "c20d12345678901234567892",
            size: 142745,
            parentList: ["c20d12345678901234567892"],
            childDocuments: 0,
            isFavorite: false,
            extension: "folder",
            isFolder: true,
            portfolios: [
              {
                name: "Örnek Dosya 2-1",
                id: "5fc17b24af42b1dfe77328e8",
                userCanAccess: true,
              },
              {
                name: "Örnek Dosya 2-2",
                id: "5fc17cf73e253a394a15dcf5",
                userCanAccess: true,
              },
            ],
          },
          {
            id: "f22d12345678901234567892",
            objectType: "folder",
            parentId: "c20d12345678901234567892",
            name: "Case Minutes",
            description: "",
            updatedAt: "2023-09-06T10:37:17.448Z",
            clientStoreId: "c20d12345678901234567892",
            size: 300484,
            portfolioList: [],
            parentList: ["c20d12345678901234567892"],
            childDocuments: 0,
            isFavorite: false,
            extension: "folder",
            isFolder: true,
          },
          {
            id: "18700af34f943c0a9887a6c9",
            objectType: "document",
            parentId: "c20d12345678901234567892",
            name: "Akbank Contact List",
            description: "",
            updatedAt: "2023-09-06T10:37:17.452Z",
            userId: "b10d12345678901234567801",
            clientStoreId: "c20d12345678901234567892",
            size: 19603,
            portfolioList: [],
            parentList: ["c20d12345678901234567892"],
            childDocuments: 0,
            isFavorite: false,
            isFolder: false,
            versionNumber: "1.0",
            lastVersionDate: "2023-09-06T10:37:17.454Z",
            extension: "pdf",
            dddCompleted: true,
            userIdData: {
              id: "b10d12345678901234567801",
              userName: "mervecanat",
              fullName: "Merve Canat",
              avatarUrl:
                "https://www.mecellem.com/assets/profile-photos/small/MerveCanat.png",
              title: "System Admin",
            },
          },
          {
            id: "18700af34f943c0a9887a6ca",
            objectType: "document",
            parentId: "c20d12345678901234567892",
            name: "General Contract",
            description: "",
            updatedAt: "2023-09-06T10:37:17.456Z",
            userId: "b10d12345678901234567801",
            clientStoreId: "c20d12345678901234567892",
            size: 66749,
            portfolioList: [],
            parentList: ["c20d12345678901234567892"],
            childDocuments: 0,
            isFavorite: false,
            isFolder: false,
            versionNumber: "1.0",
            lastVersionDate: "2023-09-06T10:37:17.458Z",
            extension: "docx",
            dddCompleted: true,
            userIdData: {
              id: "b10d12345678901234567801",
              userName: "mervecanat",
              fullName: "Merve Canat",
              avatarUrl:
                "https://www.mecellem.com/assets/profile-photos/small/MerveCanat.png",
              title: "System Admin",
            },
          },
          {
            id: "18700af34f943c0a9887a6cb",
            objectType: "document",
            parentId: "c20d12345678901234567892",
            name: "Akbank NDA",
            description: "",
            updatedAt: "2023-09-06T10:37:17.460Z",
            userId: "b10d12345678901234567801",
            clientStoreId: "c20d12345678901234567892",
            size: 67979,
            portfolioList: [],
            parentList: ["c20d12345678901234567892"],
            childDocuments: 0,
            isFavorite: false,
            isFolder: false,
            versionNumber: "1.0",
            lastVersionDate: "2023-09-06T10:37:17.461Z",
            extension: "docx",
            dddCompleted: true,
            userIdData: {
              id: "b10d12345678901234567801",
              userName: "mervecanat",
              fullName: "Merve Canat",
              avatarUrl:
                "https://www.mecellem.com/assets/profile-photos/small/MerveCanat.png",
              title: "System Admin",
            },
          },
          {
            id: "18700af34f943c0a9887a6cc",
            objectType: "document",
            parentId: "c20d12345678901234567892",
            name: "CEO Letter",
            description: "",
            updatedAt: "2023-09-06T10:37:17.464Z",
            userId: "b10d12345678901234567801",
            clientStoreId: "c20d12345678901234567892",
            size: 69513,
            portfolioList: [],
            parentList: ["c20d12345678901234567892"],
            childDocuments: 0,
            isFavorite: false,
            isFolder: false,
            versionNumber: "1.0",
            lastVersionDate: "2023-09-06T10:37:17.466Z",
            extension: "docx",
            dddCompleted: true,
            userIdData: {
              id: "b10d12345678901234567801",
              userName: "mervecanat",
              fullName: "Merve Canat",
              avatarUrl:
                "https://www.mecellem.com/assets/profile-photos/small/MerveCanat.png",
              title: "System Admin",
            },
          },
          {
            id: "18ad1c406e330414e850d373",
            objectType: "folder",
            parentId: "c20d12345678901234567892",
            name: "New Folder",
            description: "Folder",
            updatedAt: "2023-09-26T13:55:45.318Z",
            clientStoreId: "c20d12345678901234567892",
            size: 82201848,
            portfolioList: [],
            parentList: ["c20d12345678901234567892"],
            childDocuments: 32,
            isFavorite: false,
            extension: "folder",
            isFolder: true,
          },
        ],
      },
      expandedBreadcrumbs: [],
    };
  },
  methods: {
    Childrens(parentId) {
      const index = this.expandedBreadcrumbs.indexOf(parentId);
      if (index !== -1) {
        this.expandedBreadcrumbs.splice(index, 1); 
      } else {
        this.expandedBreadcrumbs.push(parentId); 
      }
    },
    expandIs(parentId) {
      return this.expandedBreadcrumbs.includes(parentId);
    },
    icons(item) {
      const icons = {
        folder: "icon-folder.svg",
        excel: "icon-excel.svg",
        jpg: "icon-jpg.svg",
        pdf: "icon-pdf.svg",
        png: "icon-png.svg",
        powerpoint: "icon-powerpoint.svg",
        docx: "icon-word.svg",
        zip: "icon-zip.svg",
        svg: "icon-svg.svg",
      };

      const extension = item.extension.toLowerCase();
      const iconFileName = icons[extension];
      return require(`@/assets/${iconFileName}`);
    },
  },
};
</script>
