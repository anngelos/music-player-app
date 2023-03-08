import SongItem from "../../components/SongItem.vue";
import { shallowMount } from "@vue/test-utils";

describe("SongItem.vue", () => {
  test("render song.display_name", () => {
    const song = {
      display_name: "test",
    }

    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      }
    });

    const compositionAuthor = wrapper.find(".text-gray-500");

    expect(compositionAuthor.text()).toBe(song.display_name);
  })

  test("render song.docID in id attribute", () => {
    const song = {
      display_name: "test",
    }

    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      }
    });

    const compositionAuthor = wrapper.find(".text-gray-500");

    expect(compositionAuthor.text()).toBe(song.display_name);
  })
})