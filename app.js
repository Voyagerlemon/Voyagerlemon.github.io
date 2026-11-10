const papers = [
  {
    "title": "Loc-Edit: Localized color editing in neural radiance fields",
    "short": "Loc-Edit",
    "tag": "Published",
    "year": "2026",
    "kind": "NEUROCOMPUTING · 678 / 133184",
    "desc": "Localized color editing in neural radiance fields.",
    "authors": "Haiyang Xu, Xia Xu, Yinghao Tan, Ziye Zhang, Nanhe Chen, Bin Pan, and Zhenwei Shi.",
    "detail": "Loc-Edit enables localized color modification in neural radiance fields through ray matching and plug-in networks. It edits regions without converting the scene to another 3D representation.",
    "image": "images/loc-edit-result.webp",
    "figure": "Loc-Edit rendering of the edited skull (Figure 7a).",
    "venue": "Neurocomputing, 2026",
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1016/j.neucom.2026.133184"
      },
      {
        "label": "PDF",
        "href": "papers/loc-edit.pdf"
      },
      {
        "label": "Code",
        "href": "https://github.com/Lab-PANbin/Loc-Edit"
      },
      {
        "label": "BibTeX",
        "href": "loc-edit.bib",
        "download": true
      }
    ]
  },
  {
    "title": "AFS-Net: An Anchor-Free Domain Adaptation Network for SAR Ship Detection",
    "short": "AFS-Net",
    "tag": "Published",
    "year": "2026",
    "venue": "IEEE Geoscience and Remote Sensing Letters, 2026",
    "authors": "Mengze Wang, Bin Pan, and Haiyang Xu.",
    "detail": "Object detection in synthetic aperture radar (SAR) imagery is crucial for maritime surveillance, yet it is often limited by the scarcity of large-scale annotated data. To address this challenge, this work proposes AFS-Net, a novel anchor-free domain adaptation framework for SAR ship detection. AFS-Net effectively transfers knowledge from easily annotated optical source-domain images to unlabeled SAR target-domain images, mitigating the need for expensive SAR data annotation. Unlike conventional anchor-based detectors that struggle with the diverse scales and shapes of ships, our anchor-free approach, built upon CenterNet, provides a more streamlined and accurate localization paradigm. The core of AFS-Net consists of two innovative alignment modules designed to counteract domain shifts: the keypoint alignment module (KAM) and the box alignment module (BAM). Specifically, KAM aligns the structural distribution of heatmap responses across domains, forcing the target-domain features to mimic the ideal Gaussian-like keypoint structures from the source domain, thereby enhancing keypoint localization robustness. Concurrently, BAM aligns the center offset and size regressions to ensure the geometric consistency of the predicted bounding boxes. Experimental results show that the proposed AFS-Net outperforms existing domain adaptation object detection frameworks on SAR ship detection tasks, achieving AP improvements of 12.10%–33.37% over the baseline on cross-domain settings.",
    "links": [
      {
        "label": "Paper",
        "href": "https://ieeexplore.ieee.org/document/11303860/"
      },
      {
        "label": "PDF",
        "href": "papers/afs-net.pdf"
      },
      {
        "label": "Code",
        "href": "https://github.com/Lab-PANbin/AFS-Net"
      },
      {
        "label": "BibTeX",
        "href": "afs-net.bib",
        "download": true
      }
    ],
    "image": "images/afs-net-result.webp",
    "figure": "AFS-Net detection result for HRSC → SSDD (Figure 3d, second row)."
  },
  {
    "title": "FDAM: A Frequency-Direction-Aware Multi-Task Framework for Pavement Crack Grid Localization",
    "short": "FDAM",
    "tag": "Manuscript",
    "year": "Author manuscript",
    "kind": "CRACK DETECTION / MULTI-TASK LEARNING",
    "desc": "Frequency and direction cues for thin pavement crack grid localization.",
    "authors": "Haiyang Xu, Bin Pan, Mengze Wang, Qiaoying Qu, and Zhenwei Shi.",
    "detail": "Pavement crack grid localization remains challenging for thin and tiny cracks due to weak visual cues and background interference. Box detection often misses these cracks, while supervised semantic segmentation faces limited pixel-wise annotations and high labeling costs. In this paper, we propose a Frequency-Direction-Aware Multi-Task framework (FDAM) with box detection and grid classification branches. The core grid classification branch comprises Frequency-Domain Enhancement (FDE) and Directional Feature Refinement (DFR). FDE adaptively weights spectral bands and fuses reconstructed features with spatial features. DFR captures thin crack patterns through multi-scale strip convolutions, direction-sensitive modulation, and feature recalibration. Sparse positive cells and ambiguous local predictions motivate adaptive grid supervision. Adaptive Importance Reweighting emphasizes uncertain predictions and local label transitions, with focal supervision for all cells. Our contribution is to couple the box detection and grid classification branches through shared feature learning for pavement crack grid localization. We validate FDAM on our RoadDistress2026 dataset of thin and tiny cracks and further evaluate it on public datasets Crack500 and DeepCrack. The code is available at https://github.com/Lab-PANbin/FDAM.",
    "image": "images/fdam-result.webp",
    "pdf": "papers/fdam.pdf",
    "figure": "FDAM grid prediction on DeepCrack (Figure 5).",
    "venue": "Author manuscript",
    "links": [
      {
        "label": "PDF",
        "href": "papers/fdam.pdf"
      }
    ]
  },
  {
    "title": "QuantileGS: Quantile-Based Conformal Bounds on RGB Rendering Errors for Novel View Synthesis with 3D Gaussian Splatting",
    "short": "QuantileGS",
    "tag": "Manuscript",
    "year": "Author manuscript",
    "kind": "3D GAUSSIAN SPLATTING / UNCERTAINTY",
    "desc": "Calibrated rendering-error bounds for reliable novel view synthesis.",
    "authors": "Haiyang Xu†, Ziye Zhang†, Bin Pan, Xia Xu, and Zhenwei Shi. † Equal contribution.",
    "detail": "Uncertainty quantification for novel view synthesis with 3D Gaussian Splatting (3DGS) assesses rendering reliability at unseen viewpoints. This reliability depends on the discrepancy between rendered and true colors, which cannot be measured without ground-truth images. We therefore quantify uncertainty in this unknown discrepancy through upper bounds on per-pixel RGB mean absolute error. However, learned bounds may underestimate these errors and overstate rendering reliability, motivating calibration to a prescribed coverage level. In this paper, we propose QuantileGS, a post-hoc framework that combines learned rendering-error quantiles with scale-normalized conformal calibration to produce spatially adaptive error bounds. The framework comprises three phases. Phase 1, Rendering-Error Computation, measures RGB mean absolute error between observed images and predictions from a frozen 3DGS model. Phase 2, Ordered Gaussian Quantile Fields, learns two scalar attributes per Gaussian to predict lower and upper rendering-error quantiles. Phase 3, Scale-Normalized Conformal Calibration, calibrates the upper prediction on held-out images, using the quantile gap to scale the correction. Under the stated assumptions, the resulting bounds provide finite-sample marginal coverage. At a nominal coverage level of 90%, calibration raises mean empirical test coverage from 69.6% to 89.6% on LLFF and from 80.1% to 92.1% on Mip-NeRF 360. On LF, coverage remains conservative at 96.3% before and 96.4% after calibration. Applications to active view selection, Gaussian pruning, and RGB-D simultaneous localization and mapping illustrate how these bounds inform downstream decisions.",
    "image": "images/quantilegs-result.webp",
    "pdf": "papers/quantilegs.pdf",
    "figure": "QuantileGS-C uncertainty map for the bicycle scene (Figure 3).",
    "venue": "Author manuscript",
    "links": [
      {
        "label": "PDF",
        "href": "papers/quantilegs.pdf"
      }
    ]
  }
];
const root = document.querySelector('#projects');
const filters = [...document.querySelectorAll('[data-filter]')];
let selected = 'all';

function paperLinks(paper) {
  return paper.links.map(link => `<a href="${link.href}" ${link.download ? 'download' : 'target="_blank" rel="noopener"'}>${link.label}</a>`).join('');
}

function render() {
  root.replaceChildren();
  papers.forEach((paper, index) => {
    if (selected !== 'all' && paper.tag !== selected) return;
    const entry = document.createElement('article');
    entry.className = 'publication';
    const preview = paper.image ? `<img src="${paper.image}" alt="" loading="lazy">` : paper.short;
    entry.innerHTML = `
      <button class="publication-preview${paper.image ? '' : ' text-preview'}" aria-label="Explore ${paper.title}">${preview}</button>
      <div class="publication-copy">
        <h3>${paper.title}</h3>
        <p class="publication-authors">${paper.authors}</p>
        <p class="publication-venue">${paper.venue}</p>
        <div class="publication-links">${paperLinks(paper)}<button type="button">Abstract</button></div>
      </div>`;
    entry.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => showPaper(index));
    });
    root.append(entry);
  });
}

for (const filter of filters) {
  filter.addEventListener('click', () => {
    selected = filter.dataset.filter;
    for (const button of filters) {
      button.classList.toggle('active', button === filter);
      button.setAttribute('aria-pressed', String(button === filter));
    }
    render();
  });
}

const dialog = document.querySelector('dialog');
function showPaper(index) {
  const paper = papers[index];
  document.querySelector('#modal-title').textContent = paper.title;
  document.querySelector('#modal-tag').textContent = paper.venue;
  document.querySelector('#modal-description').textContent = paper.detail;
  document.querySelector('#modal-authors').textContent = paper.authors;
  const figure = document.querySelector('#modal-figure');
  figure.hidden = !paper.image;
  if (paper.image) figure.src = paper.image;
  else figure.removeAttribute('src');
  figure.alt = paper.figure || '';
  document.querySelector('#modal-caption').textContent = paper.figure || '';
  document.querySelector('#modal-links').innerHTML = `<div class="publication-links">${paperLinks(paper)}</div>`
    + (paper.tag === 'Manuscript' ? '<p class="manuscript-status">Author-shared manuscript · Not yet public on arXiv.</p>' : '');
  dialog.showModal();
}
dialog.querySelector('.close').onclick = () => dialog.close();
dialog.querySelector('.modal-done').onclick = () => dialog.close();
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }
});

render();
