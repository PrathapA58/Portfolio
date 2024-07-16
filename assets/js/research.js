/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Survey Paper : Deep Learning in Real-Time Applications",
    authors:
      "Mohamed Asmathulla G , Prathap A, Dr. T. Gobinath, Dr. M. Kumar",
    // conferences:
    //   "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2024,
    citebox: "popup1",
    image: "data:image/png;base64,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",
    citation: {
      vancouver:
        "Deep Learning, Real-time Applications, Neural Network Topologies, Input Processing Methods, Dynamic Contexts, Time-sensitive Systems, Surveillance Systems, Autonomous Cars, Healthcare, Case Studies, Computing Efficiency, Latency Issues, Resource Limitations, Data Gathering Techniques, Neural Network Concepts",
    },
    abstract:
      "This paper investigates the effectiveness of deep learning algorithms in dynamic, time-sensitive contexts by  examining the interface between deep learning and real-time applications. We give a summary of the importance of deep learning in real-time situations, emphasizing how it may transform a number of industries, including surveillance systems, autonomous cars, and healthcare. This study aims to investigate how neural network topologies, input processing methods, and datasets contribute to real-time performance. We conduct a thorough analysis of pertinent case studiereal-time applications, actual implementation still depends on resolving problems with computing efficiency, latency, and resource limitations. “In order to improve comprehension and clarify the impacts of deep learning, this paper explains the fundamentals of deep learning, including data gathering techniques, neural network concepts, and their application in real-time settings”",
    absbox: "absPopup1",
  },

  // {
  //   title: "A Call for More Rigor in Unsupervised Cross-lingual Learning",
  //   authors:
  //     "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup2",
  //   image: "assets/images/research-page/crossLingual.png",
  //   citation: {
  //     vancouver:
  //       "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 2",
  //   absbox: "absPopup2",
  // },

  // {
  //   title:
  //     "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
  //   authors: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup3",
  //   image: "assets/images/research-page/wordRepresentation.png",
  //   citation: {
  //     vancouver:
  //       "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 3",
  //   absbox: "absPopup3",
  // },

  // {
  //   title:
  //     "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
  //   authors:
  //     "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup4",
  //   image: "assets/images/research-page/dialogueState.png",
  //   citation: {
  //     vancouver:
  //       "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 4",
  //   absbox: "absPopup4",
  // },

  // {
  //   title: "Dual Super-Resolution Learning for Semantic Segmentation",
  //   authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup5",
  //   image: "assets/images/research-page/semanticSegmentation.png",
  //   citation: {
  //     vancouver:
  //       "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 5",
  //   absbox: "absPopup5",
  // },

  // {
  //   title: "Deep Unfolding Network for Image Super-Resolution",
  //   authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup6",
  //   image: "assets/images/research-page/deepNetwork.png",
  //   citation: {
  //     vancouver:
  //       "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 6",
  //   absbox: "absPopup6",
  // },

  // {
  //   title:
  //     "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
  //   authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup7",
  //   image: "assets/images/research-page/imageDecomposition.png",
  //   citation: {
  //     vancouver:
  //       "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 7",
  //   absbox: "absPopup7",
  // },
  // {
  //   title:
  //     "Forward and Backward Information Retention for Accurate Binary Neural Networks",
  //   authors:
  //     "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup8",
  //   image: "assets/images/research-page/neuralNetworks.jpg",
  //   citation: {
  //     vancouver:
  //       "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 8",
  //   absbox: "absPopup8",
  // },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
