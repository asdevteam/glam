<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/oshop/templates/html.html.twig */
class __TwigTemplate_5fa98c75ddbb14978908295e270d6ba9 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 2
        $context["body_classes"] = [0 => ((        // line 3
($context["class"] ?? null) - ($context["header"] ?? null)) - 5), 1 => "business-theme", 2 => ((        // line 5
($context["logged_in"] ?? null)) ? ("user-logged-in") : ("")), 3 => (( !        // line 6
($context["root_path"] ?? null)) ? ("path-frontpage home") : (("path-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["root_path"] ?? null), 6, $this->source))))), 4 => ((        // line 7
($context["node_type"] ?? null)) ? (("page-node-type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["node_type"] ?? null), 7, $this->source)))) : ("")), 5 => ((        // line 8
($context["db_offline"] ?? null)) ? ("db-offline") : ("")), 6 => (((        // line 9
($context["node_type"] ?? null) == "homepage")) ? ("home") : ((((($context["root_path"] ?? null) && (($context["node_type"] ?? null) != "blog_post"))) ? ("page") : ("")))), 7 => (((        // line 10
($context["header_style"] ?? null) == "header5")) ? ("side-navbar") : (""))];
        // line 13
        echo "<!DOCTYPE html>
<html";
        // line 14
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["html_attributes"] ?? null), 14, $this->source), "html", null, true);
        echo ">
    <head>
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
        <head-placeholder token=\"";
        // line 17
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 17, $this->source));
        echo "\">
        <!-- Stylesheet -->
        <css-placeholder token=\"";
        // line 19
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 19, $this->source));
        echo "\">
        <js-placeholder token=\"";
        // line 20
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 20, $this->source));
        echo "\">
        <link href=\" ";
        // line 21
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["theme_path"] ?? null), 21, $this->source), "html", null, true);
        echo "/css/theme-color/";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["choose_color"] ?? null), 21, $this->source), "html", null, true);
        echo ".css\" data-style=\"styles\" rel=\"stylesheet\">
        ";
        // line 22
        if ((($context["general_setting_tracking_code"] ?? null) != "")) {
            // line 23
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t($this->sandbox->ensureToStringAllowed(($context["general_setting_tracking_code"] ?? null), 23, $this->source)));
            echo "
        ";
        }
        // line 25
        echo "        ";
        if ((($context["custom_css"] ?? null) != "")) {
            // line 26
            echo "            <style type=\"text/css\" media=\"all\">
              ";
            // line 27
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t($this->sandbox->ensureToStringAllowed(($context["custom_css"] ?? null), 27, $this->source)));
            echo "
            </style>
        ";
        }
        // line 30
        echo "        <title>";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->safeJoin($this->env, $this->sandbox->ensureToStringAllowed(($context["head_title"] ?? null), 30, $this->source), " | "));
        echo "</title>
    </head>
    

    <body";
        // line 34
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["body_classes"] ?? null)], "method", false, false, true, 34), 34, $this->source), "html", null, true);
        echo ">
        <a href=\"#main-content\" class=\"visually-hidden focusable\">
            ";
        // line 36
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Skip to main content"));
        echo "
        </a>
            <div class=\"page-wrapper\">
              ";
        // line 39
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_top"] ?? null), 39, $this->source), "html", null, true);
        echo "
              ";
        // line 40
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page"] ?? null), 40, $this->source), "html", null, true);
        echo "
              ";
        // line 41
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_bottom"] ?? null), 41, $this->source), "html", null, true);
        echo "
            </div>
      <js-bottom-placeholder token=\"";
        // line 43
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 43, $this->source));
        echo "\">
    </body>
</html>";
    }

    public function getTemplateName()
    {
        return "themes/oshop/templates/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 43,  123 => 41,  119 => 40,  115 => 39,  109 => 36,  104 => 34,  96 => 30,  90 => 27,  87 => 26,  84 => 25,  78 => 23,  76 => 22,  70 => 21,  66 => 20,  62 => 19,  57 => 17,  51 => 14,  48 => 13,  46 => 10,  45 => 9,  44 => 8,  43 => 7,  42 => 6,  41 => 5,  40 => 3,  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{%
  set body_classes = [
    class-header-5,
    'business-theme',
    logged_in ? 'user-logged-in',
    not root_path ? 'path-frontpage home' : 'path-' ~ root_path|clean_class,
    node_type ? 'page-node-type-' ~ node_type|clean_class,
    db_offline ? 'db-offline',
    node_type == 'homepage' ? 'home' : root_path and node_type != 'blog_post' ? 'page',
    header_style == 'header5' ? 'side-navbar',
  ]
%}
<!DOCTYPE html>
<html{{ html_attributes }}>
    <head>
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
        <head-placeholder token=\"{{ placeholder_token|raw }}\">
        <!-- Stylesheet -->
        <css-placeholder token=\"{{ placeholder_token|raw }}\">
        <js-placeholder token=\"{{ placeholder_token|raw }}\">
        <link href=\" {{ theme_path }}/css/theme-color/{{ choose_color }}.css\" data-style=\"styles\" rel=\"stylesheet\">
        {% if general_setting_tracking_code != '' %}
            {{ general_setting_tracking_code|t }}
        {% endif %}
        {% if custom_css != '' %}
            <style type=\"text/css\" media=\"all\">
              {{ custom_css|t }}
            </style>
        {% endif %}
        <title>{{ head_title|safe_join(' | ') }}</title>
    </head>
    

    <body{{ attributes.addClass(body_classes)}}>
        <a href=\"#main-content\" class=\"visually-hidden focusable\">
            {{ 'Skip to main content'|t }}
        </a>
            <div class=\"page-wrapper\">
              {{ page_top }}
              {{ page }}
              {{ page_bottom }}
            </div>
      <js-bottom-placeholder token=\"{{ placeholder_token|raw }}\">
    </body>
</html>", "themes/oshop/templates/html.html.twig", "/var/www/html/themes/oshop/templates/html.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 2, "if" => 22);
        static $filters = array("clean_class" => 6, "escape" => 14, "raw" => 17, "t" => 23, "safe_join" => 30);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 'raw', 't', 'safe_join'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
