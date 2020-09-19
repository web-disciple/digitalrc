<template>
  <div class="bg-white p-4 border rounded shadow-lg">
    <client-only>
      <FormulateForm v-model="values" :schema="schema" />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: {},
      schema: [
        {
          type: "text",
          name: "name",
          label: "Nom / prénom*",
          validation: "required",
          validationMessages: {
            required: "Nom / Prénom requis.",
          },
        },
        {
          type: "email",
          name: "email",
          label: "Email*",
          validation: "^required|confirm:email",
          validationName: "email",
          //   error: "Email requis.",
          validationMessages: {
            required: "Email requis.",
          },
        },
        {
          type: "tel",
          name: "phone",
          label: "Téléphone",
          validationName: "phone",
        },
        {
          name: "state",
          type: "select",
          label: "Je suis intéressé par :",
          validation: "required",
          options: {
            imprimantes: "Achat d'imprimantes",
            locations: "Location d'imprimantes",
            maintenance: "Contrat de maintenance",
          },
        },
        {
          type: "submit",
          label: "Entrez en relation",
        },
      ],
    };
  },
};
</script>

<style>
.formulate-input-wrapper {
  @apply mt-4;
}
.formulate-input-label {
  @apply pb-4;
  @apply uppercase;
  @apply font-light;
  font-size: 14px;
}
.formulate-input-element input,
select {
  width: 100%;
  padding: 9px 20px;
  border: 1px solid #e1e2eb;
  background-color: #fff;
  color: #102a43;
  caret-color: #829ab1;
  height: 49px;
  box-sizing: border-box;
  font-size: 14px;
  font-size: 1rem;
  line-height: 29px;
  line-height: 2.0714285714rem;
  -webkit-box-shadow: inset 0 2px 4px 0 rgba(206, 209, 224, 0.2);
  -moz-box-shadow: inset 0 2px 4px 0 rgba(206, 209, 224, 0.2);
  box-shadow: inset 0 2px 4px 0 rgba(206, 209, 224, 0.2);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  line-height: 29px;
  line-height: 2.0714285714rem;
}

.formulate-input-errors li {
  font-size: 12px;
  @apply text-red-500;
}

.formulate-input-element--select {
  @apply mt-2;
}

.formulate-input-element--submit {
  @apply flex;
  @apply justify-end;
  @apply mt-8;
}

.formulate-input-element--submit button {
  @apply px-4;
  @apply py-2;
  @apply border;
  @apply rounded;
  @apply font-light;
  @apply bg-gray-900;
  @apply text-white;
}
</style>